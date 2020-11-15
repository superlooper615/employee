import http from "../http-common";

class boatService{
    static getAll() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await http.get(`/boat`);
                const boat = res.data;
                resolve(
                    boat.map((boat) => ({
                        ...boat,
                    }))
                )
            }catch(err){
                reject(err);
            }
        })
      }
}export default boatService;