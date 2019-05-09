import axios from "axios";

function getData() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function deleteData(postId) {
    return axios.delete('https://jsonplaceholder.typicode.com/posts/'+postId);
}

function editData(postId,data) {
    return axios.patch('https://jsonplaceholder.typicode.com/posts/'+postId, {
        data
    });
}



export {
    getData,
    deleteData,
    editData
};
