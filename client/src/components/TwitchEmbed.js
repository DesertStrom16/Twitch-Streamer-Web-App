import React, { useEffect } from "react";

export default function TwitchEmbed(props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      let options = {
        width: "800",
        height: "450",
        video: "592572087",
        parent: ["localhost"],
      };
      const player = new window.Twitch.Player("player-id", options);

      player.addEventListener(window.Twitch.Player.READY, () => {
        console.log("Ready!");
        player.pause();
      });
      player.addEventListener(window.Twitch.Player.PLAYING, () => {
        console.log("Playing!");
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div id="player-id"></div>
    </div>
  );
}
