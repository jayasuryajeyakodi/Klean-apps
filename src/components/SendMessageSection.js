import React from "react";
import styles from "./SendMessageSection.css";
import HeadingLine from "./HeadingLine";
import Card from "./Card";
import Strings from "../../strings";

class SendMessageSection extends React.Component {
    render() {
        return (
            <Card className={styles.sendMessageSection}>
                <p className={styles.sendMessageText}>{Strings.SEND_MESSAGE}</p>
                <HeadingLine
                    align="left"
                    color="#6E6EFF"
                />
                <form className={styles.sendMessageForm}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone (or) Email" />
                    <textarea rows="4" cols="50" placeholder="Message" />
                    <button className={styles.sendButton} type="submit">Send</button>
                </form>
            </Card>
        );
    }
}

export default SendMessageSection;