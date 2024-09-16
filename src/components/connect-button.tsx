import React from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function ConnectButton() {
  const { connect, connectors } = useConnect();

  return (
    <>
      {/* <button onClick={() => connect({ connector: connectors[0] })}> */}
      <button onClick={() => connect({ connector: injected() })}>
        Connect
      </button>
    </>
  );
}
