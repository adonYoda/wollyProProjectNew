import { List } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDraft, IMessage, IMessageResponse, IState } from "../../../types";
import DraftsPreview from "./DraftsPreview";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";

// const Container = styled.div`
//   width: 100%;
//   height: 105px;
// `;
interface Props {
  data: IMessageResponse[];
  folder: string;
  setDraftIndex: (value: number) => void;
  category: string;
}

const Message: React.FC<Props> = ({
  data,
  folder,
  setDraftIndex,
  category,
}) => {
  console.log("Message RENDER");
  const [dataMessage, setDataMessage] = useState<
    IMessageResponse | undefined
  >();
  const [flag, setFlag] = useState(false);
  const handlerID = ({
    author,
    subject,
    content,
    stared,
    id,
    dateCreated,
    trashed,
    read,
    sent,
    recipient,
  }: IMessageResponse) => {
    setDataMessage({
      author,
      subject,
      content,
      stared,
      id,
      dateCreated,
      trashed,
      read,
      sent,
      recipient,
    });
  };
  const handlerFlag = (flag: boolean) => {
    setFlag(flag);
  };
  const drafts = useSelector<IState, IDraft[] | undefined>(
    (state) => state.drafts
  );
  console.log(drafts);

  return (
    <>
      <List style={{ width: "100%", height: "100%", padding: "0px" }}>
        {flag ? (
          <MessageFull handlerFlag={handlerFlag} dataMessage={dataMessage} />
        ) : (
          <>
            {category === "deleted" &&
              data.map(
                ({
                  author,
                  subject,
                  content,
                  stared,
                  id,
                  dateCreated,
                  trashed,
                  sent,
                  recipient,
                  read,
                }) =>
                  trashed == true && (
                    <MessagePreview
                      key={id}
                      author={author}
                      subject={subject}
                      content={content}
                      stared={stared}
                      id={id}
                      dateCreated={dateCreated}
                      trashed={trashed}
                      sent={sent}
                      recipient={recipient}
                      read={read}
                      handlerID={handlerID}
                      handlerFlag={handlerFlag}
                    />
                  )
              )}
            {category === "stared" &&
              data.map(
                ({
                  author,
                  subject,
                  content,
                  stared,
                  id,
                  dateCreated,
                  trashed,
                  sent,
                  recipient,
                  read,
                }) =>
                  stared == true && trashed == false && (
                    <MessagePreview
                    key={id}
                    author={author}
                    subject={subject}
                    content={content}
                    stared={stared}
                    id={id}
                    dateCreated={dateCreated}
                    trashed={trashed}
                    sent={sent}
                    recipient={recipient}
                    read={read}
                    handlerID={handlerID}
                    handlerFlag={handlerFlag}
                    />
                  )
              )}
            {category === "unread" && 
              data.map(
                ({
                  author,
                  subject,
                  content,
                  stared,
                  id,
                  dateCreated,
                  trashed,
                  sent,
                  recipient,
                  read,
                }) =>
                  read == false && trashed == false && (
                    <MessagePreview
                    key={id}
                    author={author}
                    subject={subject}
                    content={content}
                    stared={stared}
                    id={id}
                    dateCreated={dateCreated}
                    trashed={trashed}
                    sent={sent}
                    recipient={recipient}
                    read={read}
                    handlerID={handlerID}
                    handlerFlag={handlerFlag}
                    />
                  )
              )}
              {category === "inbox" && 
              data.map(
                ({
                  author,
                  subject,
                  content,
                  stared,
                  id,
                  dateCreated,
                  trashed,
                  sent,
                  recipient,
                  read,
                }) =>
                  trashed == false && (
                    <MessagePreview
                    key={id}
                    author={author}
                    subject={subject}
                    content={content}
                    stared={stared}
                    id={id}
                    dateCreated={dateCreated}
                    trashed={trashed}
                    sent={sent}
                    recipient={recipient}
                    read={read}
                    handlerID={handlerID}
                    handlerFlag={handlerFlag}
                    />
                  )
              )}
              {category === "sent" &&
              data.map(
                ({
                  author,
                  subject,
                  content,
                  stared,
                  id,
                  dateCreated,
                  trashed,
                  sent,
                  recipient,
                  read,
                }) =>
                  sent == true && trashed == false && (
                    <MessagePreview
                    key={id}
                    author={author}
                    subject={subject}
                    content={content}
                    stared={stared}
                    id={id}
                    dateCreated={dateCreated}
                    trashed={trashed}
                    sent={sent}
                    recipient={recipient}
                    read={read}
                    handlerID={handlerID}
                    handlerFlag={handlerFlag}
                    />
                  )
              )}
          </>
        )}
      </List>
    </>
  );
};

export default Message;

// {folder === 'drafts' && drafts &&
// drafts?.map((draft: IDraft, i: number) => (
//   <DraftsPreview key={i} index={i} {...draft} setDraftIndex={setDraftIndex} />
// ))
// }

// {folder !== 'drafts' && data.map(
// ({
//   author,
//   subject,
//   content,
//   stared,
//   id,
//   dateCreated,
//   trashed,
// }) =>
//   (trashed == false && folder !== "trash" && (
//     <MessagePreview
//       key={id}
//       author={author}
//       subject={subject}
//       content={content}
//       stared={stared}
//       id={id}
//       dateCreated={dateCreated}
//       trashed={trashed}
//       handlerID={handlerID}
//       handlerFlag={handlerFlag}
//     />
//   )) ||
//   (trashed == true && folder === "trash" && (
//     <MessagePreview
//       key={id}
//       author={author}
//       subject={subject}
//       content={content}
//       stared={stared}
//       id={id}
//       dateCreated={dateCreated}
//       trashed={trashed}
//       handlerID={handlerID}
//       handlerFlag={handlerFlag}
//     />
//   ))
// )}
