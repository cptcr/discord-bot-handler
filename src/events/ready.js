module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('[ CLIENT ] Ready to use!');

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            const statusArray = [
                {
                    content: "Test",
                    type: "PLAYING"
                }
            ]

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};