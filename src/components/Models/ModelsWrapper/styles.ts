import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const OverlaysRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModelOverlay = styled.div`
  position: sticky;
  top: 0;

  height: 100vh;
  margin-top: -100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, OverlaysRoot, ModelOverlay };
