import React from "react";
import styled from "styled-components";

function Status({ className, status }) {
  return (
    <StatusWrapper className={className} status={status}>
      <Circle status={status}></Circle>
      <Text status={status}>{status}</Text>
    </StatusWrapper>
  );
}

export default Status;

const StatusWrapper = styled.div`
  min-width: 6.5rem;
  width: 6.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    if (props.status === "paid") return props.theme.status.paid.backgroundColor;
    if (props.status === "pending")
      return props.theme.status.pending.backgroundColor;
    if (props.status === "draft")
      return props.theme.status.draft.backgroundColor;
  }};
  border-radius: 0.3rem;
`;

const Circle = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${(props) => {
    if (props.status === "paid") return props.theme.status.paid.color;
    if (props.status === "pending") return props.theme.status.pending.color;
    if (props.status === "draft") return props.theme.status.draft.color;
  }};
`;
const Text = styled.div`
  text-transform: capitalize;
  color: ${(props) => {
    if (props.status === "paid") return props.theme.status.paid.color;
    if (props.status === "pending") return props.theme.status.pending.color;
    if (props.status === "draft") return props.theme.status.draft.color;
  }};
`;
