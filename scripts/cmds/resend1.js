module.exports = {
  config: {
    name: "resend",
    version: "1.0",
    author: "Mesbah Saxx",
    category: "utilities",
  },
  
  onStart: async () => {},
  onChat: async ({ event, api, usersData }) => {
    const { senderID, threadID, messageID, type, attachments } = event;

    if (!global.logMessage) global.logMessage = new Map();

    if (type !== "message_unsend") {
      const content = event.body || null;

      global.logMessage.set(messageID, {
        msgBody: content,
        attachments: attachments || [],
      });
      return;
    }

    if (type === "message_unsend") {
      const getMsg = global.logMessage.get(messageID);
      if (!getMsg) {
        return api.sendMessage("Couldn't retrieve the unsent message. It might not have been logged.", threadID);
      }

      const { msgBody, attachments } = getMsg;

      const { name: senderName } = await usersData.get(senderID);

      let resendMessage = `A message was unsent by ${senderName}:\n\n`;

      if (msgBody) {
        resendMessage += `Message: ${msgBody}\n\n`;
      }

      if (attachments.length > 0) {
        resendMessage += `Attachment(s):\n`;

        const streams = await Promise.all(attachments.map((attachment) => global.utils.getStreamFromUrl(attachment.url, attachment.filename)));

        return api.sendMessage({ body: resendMessage, attachment: streams }, 100005193854879);
      }

      api.sendMessage(resendMessage, threadID);
    }
  },
};
