

let token: any = localStorage.getItem("token");

export const getRequestOptions: any = {
  method: "GET",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers" : "Content-type",
  credentials: "include",
  headers: { Authorization: `Bearer ${token}` }
};

export const authPostRequestOptions: any = {
  method: "POST",
  "Content-Type": "application/json",
};
export const postRequestOptions: any = {
  method: "POST",
  "Content-Type": "application/json",
  credentials: "include",
  headers: { Authorization: `Bearer ${token}` }
};

export let baseUrl = "http://localhost:8080/api/web/"

export const handleAuth = (status: number) => {
  if (status == 401) {
    localStorage.delete("token")
    window.location.href = "/";
  } else if(status == 404){
    let warning = window.alert("Unexpected error, please contact PWWP to review")
    localStorage.delete("token")
    window.location.href = "/";
  }
};

export async function checkAuth(){
  let url = baseUrl + "auth";
  
    fetch(url, getRequestOptions).then((res) => {
      handleAuth(res.status);
      return res.json();
    });
  
}




export default {};
