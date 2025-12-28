type GreetProps = {
    name: string
    messageCount?: number //Optional value
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'Welcome Guest'
            }
        </div>
    )
}