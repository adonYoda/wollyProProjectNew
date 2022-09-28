import { List } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDraft, IMessage, IState } from "../../../types";
import Message from "./Message";
import Drafts from "./Drafts";
import DraftsPreview from "./DraftsPreview";
import Inbox from "./Inbox";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";
import NewMessage from "./NewMessage";
import Sent from "./Sent";
import Starred from "./Starred";
import Unread from "./Unread";

// const Container = styled.div`
//   width: 100%;
//   height: 105px;
// `;
interface Props {
  data: IMessage[];
  folder: string;
  setDraftIndex: (value: number) => void;
  category: string;
}

const MainMessage: React.FC<Props> = ({ data, folder, setDraftIndex, category }) => {
  console.log("Message RENDER");
  const [dataMessage, setDataMessage] = useState<IMessage | undefined>();
  const [flag, setFlag] = useState(false);
  const handlerID = ({
    author,
    subject,
    content,
    stared,
    id,
    dateCreated,
    trashed,
  }: IMessage) => {
    setDataMessage({
      author,
      subject,
      content,
      stared,
      id,
      dateCreated,
      trashed,
    });
  };
  const handlerFlag = (flag: boolean) => {
    setFlag(flag);
  };
  const drafts = useSelector<IState, IDraft[] | undefined>((state) => state.drafts);
  console.log(drafts);

  return (
    <>
       <List style={{ width: "100%", height: "100%", padding: "0px" }}>
        {flag ? (
          <MessageFull handlerFlag={handlerFlag} dataMessage={dataMessage} />
        ) : (
          <>
            {data.map(
              ({
                author,
                subject,
                content,
                stared,
                id,
                dateCreated,
                trashed,
              }) =>
             
                trashed === true &&
                  <MessagePreview
                    key={id}
                    author={author}
                    subject={subject}
                    content={content}
                    stared={stared}
                    id={id}
                    dateCreated={dateCreated}
                    trashed={trashed}
                    handlerID={handlerID}
                    handlerFlag={handlerFlag}
                  />
            )}
          </>
        )}
      </List>




     {/* {category === "sent" && <Sent/>}
     {category === "deleted" && <Message dataMessage={data} />}
     {category === "newMessage" && <NewMessage/>}
     {category === "drafts" && <Drafts/>}
     {category === "starred" && <Starred/>}
     {category === "unread" && <Unread/>}
     {category === "inbox" && <Inbox/>} */}
    </>
  );
};

export default MainMessage;
