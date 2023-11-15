import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ Comment }) => {
    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    method: 'DELETED',
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNGU0YWNlZTJlMjAwMThkY2JmN2EiLCJpYXQiOjE2OTk4MjcyNzQsImV4cCI6MTcwMTAzNjg3NH0.aVArvnsgj2WxGxX79V1usXvd2l4jcAh01ApkBDhHUZI',
                    }
                }

            )
            if (response.ok) {
                alert('La recensione e stata eliminata!')
            } else {
                throw new Error('La recensione non e stata eliminata!')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <ListGroup.Item data-testid="single-comment">
            {Comment.Comment}
            <Button
                variant="danger"
                className="mt-2"
                onClick={() => deleteComment(Comment._id)}
            >
                Elimina
            </Button>
        </ListGroup.Item>
    )
}

export default SingleComment
