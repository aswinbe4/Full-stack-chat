import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'cdf9d0fa-339e-4ea3-bbd0-ca2591572c65', 
        props.user.username, 
        props.user.secret
    );
    return (
     <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
        </div>
    )
}
export default ChatsPage