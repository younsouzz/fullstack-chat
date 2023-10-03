import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '5d81f7d9-da3d-47a1-a09a-480bf742e96f',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
    )
}

export default ChatsPage