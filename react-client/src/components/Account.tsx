import { ConnectorNotFoundError } from "@wagmi/core";
import React, { useState } from "react";
import { useAccount, useBalance, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function Account() {
  const [msg, setMsg] = useState("");
  const { data: account } = useAccount();
  const {
    connect,
    isConnected,
    isConnecting,
    status: connectionStatus,
  } = useConnect({
    connector: new InjectedConnector(),
    onError: (err) => {
      if (err instanceof ConnectorNotFoundError) {
        setMsg("Install MetaMast first!");
      }
    },
    onConnect: () => {
      setMsg("");
    },
  });
  const { data: balance } = useBalance({
    addressOrName: account?.address,
  });
  return (
    <>
      <pre>connectionStatus: {JSON.stringify(connectionStatus, null, 2)}</pre>
      <div>
        {!isConnected && (
          <button onClick={() => connect()} disabled={isConnecting}>
            connect your wallet
          </button>
        )}
        {msg && <p style={{ color: "red" }}>{msg}</p>}
      </div>
      {account && (
        <p>
          account: {account.address} ({balance?.formatted} {balance?.symbol})
        </p>
      )}
      <hr />
    </>
  );
}

export default Account;
