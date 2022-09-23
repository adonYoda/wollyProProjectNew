import { List } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { IMessage, IMessageResponse } from "../../../types";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";

const Container = styled.div`
  width: 100%;
  height: 105px;
`;
interface Props {
  data: [];
}

const Message: React.FC<Props> = ({ data }) => {
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
    trashed
  }: IMessage) => {
    setDataMessage({ author, subject, content, stared, id, dateCreated, trashed });
  };
  const handlerFlag = (flag: boolean) => {
    setFlag(flag);
  };
  return (
    <>
      <List style={{ width: "100%", height: "100%", padding: "0px" }}>
        {flag ? (
          <MessageFull handlerFlag={handlerFlag} dataMessage={dataMessage} />
        ) : (
          <>
            {data.map(
              ({ author, subject, content, stared, id, dateCreated, trashed }) => (
                // !trashed &&
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
              )
            )}
          </>
        )}
      </List>
    </>
  );
};

export default Message;
