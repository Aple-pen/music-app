import React, {useState} from 'react';
import axios from "axios";

const UploadPicture = (props) => {
    const [img,setImg] = useState(null)
    const [upImg,setUpImg] = useState("/upload")
    const onChange=(e)=>{
        setImg(e.target.files[0])
    }
    const onClick = async()=>{
        const formData = new FormData();
        console.log(img)
        formData.append('file', img);
        for (var pair of formData.entries()) { console.log(pair[0]+ ', ' + pair[1]); }
        // 서버의 upload API 호출
        // const res = await fetch('http://localhost:3000/api/users/test', {
        //     method: 'POST',
        //     cache: 'no-cache',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: formData
        // });
        const res = await axios.post('http://localhost:3000/api/users/test',formData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })

        setUpImg(res.data.image)
        console.log(res);
    }

    return (
        <div>
            <h1>upload piture</h1>
            <img src={"http://localhost:3000/" + upImg} alt=""/>
            <input type="file" id="upload" accept="image/png,image/jpeg,image/gif" onChange={onChange}/>
            <button onClick={onClick}>제출</button>
        </div>
    )
}

export default UploadPicture;