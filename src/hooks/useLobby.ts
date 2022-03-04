import { useState, useEffect } from "react";
import { Channel, Socket } from "phoenix";

const useLobby = (socket: Socket|null, userId: number) => {
  const [channel, setChannel] = useState<Channel>();

  useEffect(() => {
    if (!socket) return;
		if (!userId) return;

    const lobby = socket.channel("lobby");
    lobby
      .join()
      .receive("ok", () => setChannel(lobby))
      .receive("error", console.log)
      .receive("timeout", console.log);
  }, [socket, userId]);

	return [channel]
};

export default useLobby;
