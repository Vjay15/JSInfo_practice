type StatusProps = {
    status:'loading' | 'error' | 'success'
}
export const Status = (props : StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading....'
    }
    else if(props.status==='success'){
        message = 'Data Fetched Successfully'
    }
    else if(props.status==='error'){
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}