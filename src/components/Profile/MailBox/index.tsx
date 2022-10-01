import { Box, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetMailboxMessagesQuery } from "../../../API/messageApi";

import InputOutcomingMessage from "./InputOutcomingMessage";
import ListDividers from "./MenuMailBox";
import Message from "./Message";
import { messagePageSizes } from "../../../utils/constants";
import { style } from "@mui/system";
import { MyContainer } from "../../../styles/Container.styled";

const gridWidth = 250;

const GridWrap = styled(Grid)`
  display: flex;
  flex-wrap: nowrap;
`
const GridNav = styled(Grid)`
  flex: 0 0 ${gridWidth}px;
`;
const GridMain = styled(Grid)`
  flex: 1 1 calc(100% - ${gridWidth}px);
`;

interface Props { }

const MailPage: React.FC<Props> = () => {
  const [folder, setFolder] = useState<string>("inbox");
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('inbox')

  const { data = [], isLoading, refetch } = useGetMailboxMessagesQuery({
    limit: messagePageSizes.limitMessagesOnPage,
    page: page,
    folder: folder,
  });
  if (isLoading) {
    console.log("Index MailBox RENDER");
  } else {
    console.log(data);
  }

  useEffect(() => {
    console.log(folder);
  }, [folder]);

  return (
    <>
      <MyContainer>
        <GridWrap
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <GridNav item>
            <ListDividers changeFolder={setFolder} changeCategory={setCategory} refetch={refetch} />
          </GridNav>
          {isLoading ? (
            <GridMain item>
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />

              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ bgcolor: "grey.500", width: "100% ", height: 60 }}
              />
            </GridMain>
          ) : (
            <GridMain item>
              <Message data={data} folder={folder} setCategory={setCategory} category={category} refetch={refetch} page={page} setPage={setPage} />
            </GridMain>
          )}
        </GridWrap>
      </MyContainer>


    </>
  );
};

export default MailPage;
