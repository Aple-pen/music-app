import React, {useRef, useState} from 'react';
import axios from "axios";
import "./UploadPicture.css"
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadPicture = (props) => {
    const [upImg, setUpImg] = useState("")
    const [imgData,setImgData] = useState(null)
    const mailRef = useRef(null)
    const nickNameRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordCheckRef = useRef(null)
    const onChange = async (e) => {

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

        console.log(formData)
        const res = await axios.post('http://localhost:3000/api/users/picture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setImgData(res.data)

        setUpImg(res.data.image)
        console.log(res);
    }
    const onClick = async()=>{
        const mail = mailRef.current.value
        const nickName = nickNameRef.current.value
        const password = passwordRef.current.value
        const passwordCheck = passwordCheckRef.current.value

        if(!mail || !nickName || !password || !passwordCheck){
            alert("항목을 다 채워주세요.")
        }else if(password !== passwordCheck){
            alert("패스워드를 확인해 주세요.")
            passwordRef.current.value = ""
            passwordCheckRef.current.value = ""
        }else{
            const data = {
                mail,nickName,password,imgData : imgData.image
            }

            const res = await axios.post('http://localhost:3000/api/users/register', data)
            console.log(res)
        }
    }


    return (
        <>
            <div className="user">
                <h1>upload piture</h1>
                <div className="profile-img">
                    {upImg ? <img src={"http://localhost:3000/" + upImg} alt=""/> :
                        <img src={require("../asset/img/profilePicture/emptyProfile.png")} alt="profile-img"
                             style={{opacity: 0.2}}/>}
                </div>
                    <input type="file" className="form-control" id="upload" accept="image/png,image/jpeg,image/gif"  onChange={onChange} />
                <Form className="form">
                    <Form.Group className="mb-3" controlId="mail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="text" type="email" placeholder="Enter email" ref={mailRef}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nickName">
                        <Form.Label>NickName</Form.Label>
                        <Form.Control size="text" placeholder="nickName" ref={nickNameRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password check</Form.Label>
                        <Form.Control type="password" placeholder="Password Check" ref={passwordCheckRef}/>
                    </Form.Group>
                    <Button variant="primary" onClick={onClick}>
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default UploadPicture;