import { List } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Drafts, IMessage } from "../../../types";
import MessageDraftPreview from "./MessageDraftPreview";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";

// const Container = styled.div`
//   width: 100%;
//   height: 105px;
// `;
interface Props {
  data: [];
  folder: string;
}

const Message: React.FC<Props> = ({ data, folder }) => {
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
  const drafts = useSelector<any>((state) => state.draftMessage) as any[];

  return (
    <>
      <List style={{ width: "100%", height: "100%", padding: "0px" }}>
        {flag ? (
          <MessageFull handlerFlag={handlerFlag} dataMessage={dataMessage} />
        ) : (
          <>
            {/* { folder == 'drafts' &&
            drafts.map(({ recipient, subject, content }) => (
              <MessageDraftPreview
                recipient ={recipient}
                subject={subject}
                content={content}
                // id={id}
                handlerID={handlerID}
                handlerFlag={handlerFlag}
              />
            ))
         } || ( */}
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
                (trashed == false && folder !== "trash" && (
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
                )) ||
                (trashed == true && folder === "trash" && (
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
                ))
            )}
            
          </>
        )}
      </List>
    </>
  );
};

export default Message;
