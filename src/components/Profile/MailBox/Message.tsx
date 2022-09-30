import { List } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IDraft, IMessage, IMessageResponse, IState } from "../../../types";
import { categoryName } from "../../../utils/constants";
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
	refetch: () => void;
}

const Message: React.FC<Props> = ({
	data,
	folder,
	setDraftIndex,
	category,
	refetch
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
	// const handlerFlag = (flag: boolean) => {
	// 	setFlag(flag);
	// };
	const drafts = useSelector<IState, IDraft[] | undefined>(
		(state) => state.drafts
	);
	console.log(drafts);
	//=======================================================================================================
	const testFunc = (category: string, dataEl: IMessageResponse) => {
		switch (category) {
			case categoryName.deleted:
				return dataEl.trashed == true;
			case categoryName.sent:
				return dataEl.sent == true && dataEl.trashed == false;
			case categoryName.stared:
				return dataEl.stared == true && dataEl.trashed == false;
			case categoryName.unread:
				return dataEl.read == false && dataEl.trashed == false;
			case categoryName.drafts:
				return drafts!.length > 0;
			// case categoryName.inbox:
			// 	return dataEl.read == false && dataEl.trashed == false;
			default:
				return dataEl.trashed == false;
		}
	}
	//=======================================================================================================


	return (
		<>
			<List style={{ width: "100%", height: "100%", padding: "0px" }}>
				{flag ? (
					<MessageFull handlerFlag={setFlag} dataMessage={dataMessage} refetch={refetch} />
				) : (
					<>
						{category !== categoryName.drafts ? (
							data.filter(m=>testFunc(category, m)).map((dataEl) => 
              (
								<MessagePreview
									{...dataEl}
									handlerID={handlerID}
									handlerFlag={setFlag}
								/>
							))
						) : (drafts &&
							drafts.map((draft, i) => (
								<DraftsPreview
									{...draft}
									index={i}
									setDraftIndex={setDraftIndex}
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
