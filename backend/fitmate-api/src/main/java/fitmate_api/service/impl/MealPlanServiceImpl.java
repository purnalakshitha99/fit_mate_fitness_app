package fitmate_api.service.impl;

import com.cloudinary.Cloudinary;
import fitmate_api.DTO.MealPlanDTO;

import fitmate_api.exception.MealPlanNotFoundException;
import fitmate_api.exception.UserNotFoundException;
import fitmate_api.model.MealPlan;
import fitmate_api.model.User;
import fitmate_api.repository.MealPlanRepository;
import fitmate_api.repository.UserRepository;
import fitmate_api.response.MealPlanResponse;

import fitmate_api.service.MealPlanService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import java.util.List;
import java.util.Map;


@Service
@AllArgsConstructor


public class MealPlanServiceImpl implements MealPlanService {

    private final MealPlanRepository mealPlanRepository;
    private final UserRepository userRepository;
    private Cloudinary cloudinary;

    private ModelMapper modelMapper;

    @Override
    public MealPlanResponse createMealPlan(Long userId, MealPlanDTO mealPlanDTO, MultipartFile file) throws MealPlanNotFoundException, UserNotFoundException, IOException {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("that user not in a database")
        );

        MealPlan mealPlan = modelMapper.map(mealPlanDTO, MealPlan.class);

        mealPlan.setCreationDate(LocalDate.now());

        LocalTime time = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = time.format(formatter);

        mealPlan.setCreationTime(LocalTime.parse(formattedTime));
        mealPlan.setUser(user);

        // Upload file to Cloudinary if file is present
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), null);
        String imageUrl = (String) uploadResult.get("url");
        mealPlan.setImagePath(imageUrl);

        System.out.println("image url  ================     ");
        System.out.println(imageUrl);

        mealPlanRepository.save(mealPlan);

        return modelMapper.map(mealPlan, MealPlanResponse.class);
    }

    @Override
    public List<MealPlanResponse> getAllMealPlan() {

        List<MealPlan> mealPlanList = mealPlanRepository.findAll();

        List<MealPlanResponse> mealPlanResponseList=new ArrayList<>();

        for(MealPlan mealPlan :mealPlanList){
            MealPlanResponse mealPlanResponse=modelMapper.map(mealPlan, MealPlanResponse.class);
            mealPlanResponseList.add(mealPlanResponse);
        }
        return mealPlanResponseList;

       }

    @Override
    public List<MealPlanResponse> getSpecificUserMealPlans(Long userId) throws UserNotFoundException, MealPlanNotFoundException {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("that user not in a database")
        );

//        List<MealPlan> specificMealPlanList = user.getMealPlanList();

        List<MealPlan> specificMealPlanList = mealPlanRepository.findMealPlanByUser(user);

        List<MealPlanResponse> mealPlanResponseList=new ArrayList<>();

        for(MealPlan mealPlan :specificMealPlanList){
            MealPlanResponse mealPlanResponse=modelMapper.map(mealPlan, MealPlanResponse.class);
            mealPlanResponseList.add(mealPlanResponse);
        }
        return mealPlanResponseList;
    }

    public MealPlanResponse getSpecificUserSpecificMealPlan(Long mealPlanId)throws MealPlanNotFoundException{

        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId).orElseThrow(
                ()-> new MealPlanNotFoundException("that meal plan not found")
        );

        return modelMapper.map(mealPlan,MealPlanResponse.class);
    }

    @Override
    public MealPlanResponse deleteSpecificUserSpecificMealPlan(Long mealPlanId) throws MealPlanNotFoundException {

        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId).orElseThrow(
                ()-> new MealPlanNotFoundException("that meal plan not in a database")
        );

        mealPlanRepository.deleteById(mealPlan.getId());

        return modelMapper.map(mealPlan,MealPlanResponse.class);
    }

    @Override
    public MealPlanResponse updateSpecificUserSpecificMealPlan(Long mealPlanId,MealPlanDTO mealPlanDTO,MultipartFile file) throws MealPlanNotFoundException,IOException {

                MealPlan mealPlan = mealPlanRepository.findById(mealPlanId).orElseThrow(
                () -> new MealPlanNotFoundException("that meal not in a database")
        );

        modelMapper.map(mealPlanDTO, mealPlan);

// Update date and time
        mealPlan.setCreationDate(LocalDate.now());
        mealPlan.setCreationTime(LocalTime.now());

        if (file != null && !file.isEmpty()) {
            // Upload file to Cloudinary if file is present
            Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), null);
            String imageUrl = (String) uploadResult.get("url");
            mealPlan.setImagePath(imageUrl);

            System.out.println("image url  ================     ");
            System.out.println(imageUrl);
        }

        mealPlanRepository.save(mealPlan);

        return modelMapper.map(mealPlan, MealPlanResponse.class);
    }


//    @Override
//    public MealPlanResponse getSpecificUserSpecificMealPlan(Long userId, Long mealPlanId) throws UserNotFoundException, MealPlanNotFoundException {
//
//        User user = userRepository.findById(userId).orElseThrow(
//                () -> new UserNotFoundException("that user not found")
//        );
//
//        MealPlan specificMealPlan = user.getMealPlanList().stream().filter(mealPlan1 -> mealPlan1.getId().equals(mealPlanId)).findFirst().orElse(null);
//
//        if (specificMealPlan == null) {
//            throw new MealPlanNotFoundException("that meal plan not in a database");
//        }
//        return modelMapper.map(specificMealPlan, MealPlanResponse.class);
//    }

//    @Override
//    public MealPlanResponse deleteSpecificUserSpecificMealPlan(Long userId, Long mealPlanId) throws UserNotFoundException, MealPlanNotFoundException {
//
//        User user = userRepository.findById(userId).orElseThrow(
//                () -> new UserNotFoundException("that user not found")
//        );
//
//        MealPlan specificMealPlan = user.getMealPlanList().stream().filter(mealPlan1 -> mealPlan1.getId().equals(mealPlanId)).findFirst().orElse(null);
//
//
//        if (specificMealPlan == null) {
//            throw new MealPlanNotFoundException("that meal plan not in a database");
//        }
//        mealPlanRepository.deleteById(specificMealPlan.getId());
//
//        return modelMapper.map(specificMealPlan, MealPlanResponse.class);
//
//    }

//    @Override
//    public MealPlanResponse updateSpecificUserSpecificMealPlan(Long userId, Long mealPlanId, MealPlanDTO mealPlanDTO, MultipartFile file) throws UserNotFoundException, MealPlanNotFoundException, IOException {
//
//        MealPlan mealPlan = mealPlanRepository.findById(mealPlanId).orElseThrow(
//                () -> new MealPlanNotFoundException("that meal not in a database")
//        );
//
//        modelMapper.map(mealPlanDTO, mealPlan);
//
//// Update date and time
//        mealPlan.setCreationDate(LocalDate.now());
//        mealPlan.setCreationTime(LocalTime.now());
//
//        if (file != null && !file.isEmpty()) {
//            // Upload file to Cloudinary if file is present
//            Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), null);
//            String imageUrl = (String) uploadResult.get("url");
//            mealPlan.setImagePath(imageUrl);
//
//            System.out.println("image url  ================     ");
//            System.out.println(imageUrl);
//        }
//
//        mealPlanRepository.save(mealPlan);
//
//        return modelMapper.map(mealPlan, MealPlanResponse.class);
//    }


}
