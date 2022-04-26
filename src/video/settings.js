import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "58a6bce33c004f3b84b61ebb04601d54";
const token =
  "00658a6bce33c004f3b84b61ebb04601d54IAD1z/dQl2EYScVuhmYLxsfaWZoKRJWQkfhi11NSO5Nvb2QgMiQAAAAAEADQ1fuzl3NnYgEAAQCac2di";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "third";

export const rtc = {
  // For the local client
  client: null,
  // For the local audio and video tracks
  localAudioTrack: null,
  localVideoTrack: null,
};

export const options = {
  // Pass your app ID here
  appId: "58a6bce33c004f3b84b61ebb04601d54",
  // Pass a token if your project enables the App Certificate
  token:
    "00658a6bce33c004f3b84b61ebb04601d54IAAbQIwO7NKNBgeTeMYmLM/hozjyCw4EprXl1murOeJnVWkRH7YAAAAAEACKbcvBkXplYgEAAQCRemVi",
};

// change the channel name and token every 4 hours
