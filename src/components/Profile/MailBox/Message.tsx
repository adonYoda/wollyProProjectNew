import { List } from "@mui/material";
import React, { useState } from "react";
import { IMessage } from "../../../types";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";

interface Props {
  dataMessage: IMessage[];
}

const Message: React.FC<Props> = ({ dataMessage }) => {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState<IMessage | undefined>();

  const handlerFlag = (flag: boolean) => {
    setFlag(flag);
  };

  const handlerID = ({
    author,
    subject,
    content,
    stared,
    id,
    dateCreated,
    trashed,
  }: IMessage) => {
    setData({
      author,
      subject,
      content,
      stared,
      id,
      dateCreated,
      trashed,
    });
  };

  return (
    <>
      {/* <List style={{ width: "100%", height: "100%", padding: "0px" }}>
        {flag ? (
          <MessageFull handlerFlag={handlerFlag} data={data} />
        ) : (
          <>
            {dataMessage.map(
              ({
                author,
                subject,
                content,
                stared,
                id,
                dateCreated,
                trashed,
              }) =>
                trashed === true && (
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
      </List> */}
    </>
  );
};

export default Message;
