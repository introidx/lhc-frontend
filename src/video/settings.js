import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "58a6bce33c004f3b84b61ebb04601d54";
const token =
  "00658a6bce33c004f3b84b61ebb04601d54IACe20Iz4sqv0XCU+CeMcZm2MoJ1Be1ZPyZWhv+2nPGTSH1mwZAAAAAAEADQ1fuzYL1oYgEAAQBkvWhi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "four";

export const rtc = {
  // For the local client
  client: null,
  // For the local audio and video tracks
  localAudioTrack: null,
  localVideoTrack: null,
};

// export const options = {
//   // Pass your app ID here
//   appId: "58a6bce33c004f3b84b61ebb04601d54",
//   // Pass a token if your project enables the App Certificate
//   token:
//     "00658a6bce33c004f3b84b61ebb04601d54IAAbQIwO7NKNBgeTeMYmLM/hozjyCw4EprXl1murOeJnVWkRH7YAAAAAEACKbcvBkXplYgEAAQCRemVi",
// };

// change the channel name and token every 4 hours
