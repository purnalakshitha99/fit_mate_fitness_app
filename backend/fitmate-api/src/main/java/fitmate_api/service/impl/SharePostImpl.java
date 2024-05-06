package fitmate_api.service.impl;

import fitmate_api.DTO.SharePostDTO;
import fitmate_api.service.SharePostService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SharePostImpl implements SharePostService {
    @Override
    public ResponseEntity<Object> sharePost(SharePostDTO sharePostDTO) {
        return null;
    }
}
