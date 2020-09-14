import React,{useState} from 'react'
import { Card ,Icon} from 'semantic-ui-react'
import copy from "copy-to-clipboard";
import './Repo.scss'
function Repo(props) {
    const [isCopied, setCopied] = useState(false);
    function handleCopy() {
        var text = props.repo_clone_url
        copy(text.toString());
        console.log('iscopied_prev',isCopied)
        setCopied(true);
        console.log('iscopied_after',isCopied)
        setTimeout(()=>{
            setCopied(false)
            console.log('iscopied_clear',isCopied)
        },4000)
    }
    return (
        <div className="repo">
            <Card >
                <Card.Content>
                    <Card.Header><a href={props.repo_url} rel="noopener noreferrer" target="_blank">{props.repo_name}</a></Card.Header>
                    <Card.Meta>
                        <span>
                            <Icon name="fork"/> {props.forks_count}   Forks
                        </span>
                        <span onClick={() => handleCopy()}>
                            {isCopied === false ? <p><Icon name="clipboard"/> Click to copy repository clone link</p> : <p><Icon name="clipboard check"/>Copied to clipboard</p>}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {props.description ? props.description : <p>description not provided</p>}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Repo
