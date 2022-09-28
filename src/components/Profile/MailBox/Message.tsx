import { List } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDraft, IMessage, IState } from "../../../types";
import DraftsPreview from "./DraftsPreview";
import MessageFull from "./MessageFull";
import MessagePreview from "./MessagePreview";

// const Container = styled.div`
//   width: 100%;
//   height: 105px;
// `;
interface Props {
  data: IMessage[];
  folder: string;
  setDraftIndex: (value: number) => void;
}

const Message: React.FC<Props> = ({ data, folder, setDraftIndex }) => {
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

            {folder === 'drafts' && drafts &&
              drafts?.map((draft: IDraft, i: number) => (
                <DraftsPreview key={i} index={i} {...draft} setDraftIndex={setDraftIndex} />
              ))
            }

            {folder !== 'drafts' && data.map(
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
