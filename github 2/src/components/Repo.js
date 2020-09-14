import React,{useEffect, useState} from 'react'
import { Card ,Icon} from 'semantic-ui-react'
import copy from "copy-to-clipboard";
import './Repo.scss'
function Repo(props) {
    const [isCopied, setCopied] = useState(false);
    function handleCopy() {
        var text = props.repo_clone_url
        copy(text.toString());
        setCopied(true);
    }
    useEffect(() => {
        let timeout;
        let resetInterval = props.resetInterval
        if (isCopied && resetInterval) {
          timeout = setTimeout(() => setCopied(!isCopied), resetInterval);
        }
        return () => {
          clearTimeout(timeout);
        };
      }, [isCopied, props.resetInterval]);
    
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
                            {isCopied ? <Icon name="clipboard check"/> :  <Icon name="clipboard"/>}
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
