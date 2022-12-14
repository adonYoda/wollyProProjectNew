import { Grid, Skeleton } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import MenuMailBox from "./MenuMailBox";
import Message from "./Message";
import { messagePageSizes } from "../../../utils/constants";
import { useGetMailboxMessagesQuery } from "../../../API/messageApi";

const gridWidth = 250;

const ContainerStyled = styled.div``;

const GridWrap = styled(Grid)`
  display: flex;
  flex-wrap: nowrap !important;
`;
const GridNav = styled(Grid)`
  flex: 0 0 ${gridWidth}px;
`;
const GridMain = styled(Grid)`
  overflow: hidden;
  flex: 1 1 calc(100% - ${gridWidth}px);
  `;
const GridSkeleton = styled(Grid)`
  overflow: hidden;
  flex: 1 1 calc(100% - ${gridWidth}px);
  & span {
    margin: 5px;
  }
`;

interface Props { }

const MailPage: React.FC<Props> = () => {
  const [folder, setFolder] = useState<string>("inbox");
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("inbox");

  const {
    data = [],
    isLoading,
    isFetching
    
  } = useGetMailboxMessagesQuery({
    limit: messagePageSizes.limitMessagesOnPage,
    page: page,
    folder: folder,
  });


  

  const quantityBlocks = useMemo(() => {
    return new Array(messagePageSizes.limitMessagesOnPage).fill(' ')
  }, [messagePageSizes.limitMessagesOnPage])

  return (
    <>
      <ContainerStyled>
        <GridWrap
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <GridNav item>
            <MenuMailBox
              changeFolder={setFolder}
              changeCategory={setCategory}
              resetPage={setPage}
            />
          </GridNav>
          {isLoading ? (
            <GridSkeleton item>
              {quantityBlocks.map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  sx={{ bgcolor: "grey.500", width: "100% ", height: messagePageSizes.heightRow }}
                />
              ))}
            </GridSkeleton>
          ) : (
            <GridMain item>
              <Message
                data={data}
                folder={folder}
                setCategory={setCategory}
                category={category}
                page={page}
                setPage={setPage}
              />
            </GridMain>
          )}
        </GridWrap>
      </ContainerStyled>
    </>
  );
};

export default MailPage;
