import api from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    createWorkOutPlan: (user_id,payload) => api.post(`/users/${user_id}/work_out_plans`,payload),
   

}