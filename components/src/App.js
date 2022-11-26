import React from 'react'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import img_avatar from './img_avatar.png'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Drago" 
                    timeAgo="Today at 6:00 PM"
                    authComment="Blog post1"
                    avatar={img_avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Ivo" 
                    timeAgo="Yesterday at 2:45AM"
                    authComment="Blog post2"
                    avatar={img_avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Yesterday at 1:00AM"
                    authComment="Blog post2"
                    avatar={img_avatar}
                />
            </ApprovalCard>
        </div>
    )
}

export default App;
