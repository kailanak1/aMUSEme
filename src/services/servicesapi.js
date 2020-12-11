const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()  
    }
}

const login = data => {
    return fetch(`${API_ROOT}/login`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify( {auth: data})
    }).then(res => {return res.json()});
  };
  
  const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers()
    }).then(res => {
      return res.json();
    });
  };

  const createUser = (data) => {
    return fetch(`${API_ROOT}/sign_up`, {
      method: "POST",
      headers: {      
        "Content-Type": "application/json",
        Accept: "application/json"
        },
      body: JSON.stringify({user: data})
    }).then(res => { return res.json()});
};


const createProject = (data) => {
    return fetch(`${API_ROOT}/new-project`, {
        method: "POST",
        headers: {      
          "Content-Type": "application/json",
          Accept: "application/json"
          },
        body: JSON.stringify({project: data})
      }).then(res => { return res.json()});
}

const getProjects = () => {
    return fetch(`${API_ROOT}/projects`, {
        headers: headers()
      }).then(res => {
        return res.json();
      });
}

const createStory = (data) => {
    return fetch(`${API_ROOT}/new-story`, {
        method: "POST",
        headers: {      
          "Content-Type": "application/json",
          Accept: "application/json"
          },
        body: JSON.stringify({story: data})
      }).then(res => { return res.json()});
}

const getStories = () => {
    return fetch(`${API_ROOT}/stories`, {
        headers: headers()
      }).then(res => {
        return res.json();
      });
}