import React, { useContext } from 'react'
import Camera from '../images/camera.png';
import AddUsers from '../images/addusers.png';
import More from '../images/more.png';
import Messages from './Messages';
import Input from './Input.jsx';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Camera} alt="" />
                    <img src={AddUsers} alt="" />
                    <img src={More} alt="" />
                </div>

            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat