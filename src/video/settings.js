import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "58a6bce33c004f3b84b61ebb04601d54";
const token =
  "00658a6bce33c004f3b84b61ebb04601d54IABoGTIR7cm9l9HH3ltaa5moS2UBF0mZSUJTeuH3K7bEgmTNKL8AAAAAEACKbcvBrzJlYgEAAQCxMmVi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

// change the channel name and token every 4 hours
