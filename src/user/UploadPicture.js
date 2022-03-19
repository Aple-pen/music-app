import React, {useState} from 'react';
import axios from "axios";
import "./UploadPicture.css"

const UploadPicture = (props) => {
    const [upImg, setUpImg] = useState("")
    const onChange = async(e) => {

        const formData = new FormData();

        let img = e.target.files[0]
        console.log(img)
        formData.append('file', img);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        // 서버의 upload API 호출
        // const res = await fetch('http://localhost:3000/api/users/test', {
        //     method: 'POST',
        //     cache: 'no-cache',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: formData
        // });

        const res = await axios.post('http://localhost:3000/api/users/picture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        setUpImg(res.data.image)
        console.log(res);
    }

    return (
        <>
            <div className="user">
                <h1>upload piture</h1>
                <div className="profile-img">
                    {upImg ? <img src={"http://localhost:3000/" + upImg} alt=""/> :
                        <img src={require("../asset/img/profilePicture/emptyProfile.png")} alt="profile-img"/>}
                </div>
                <input type="file" id="upload" accept="image/png,image/jpeg,image/gif" onChange={onChange}/>
                <button>제출</button>
            </div>
        </>
    )
}

export default UploadPicture;