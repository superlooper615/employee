import http from "../http-common";

class employeeService{
    static getAll() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await http.get(`/employee`);
                const employee = res.data;
                resolve(
                    employee.map((employee) => ({
                        ...employee,
                    }))
                )
            }catch(err){
                reject(err);
            }
        })
      }
}export default employeeService;