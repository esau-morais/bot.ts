import { Client, GatewayIntentBits, REST, Routes, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_TOKEN as string
const clientId = process.env.CLIENT_ID as string

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

const commands = [
  {
    name: 'hello',
    description: 'dev.ts says hello to you',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hello') {
    await interaction.reply(`Hey, ${interaction.member?.user.username}`);
  }
});

client.login(token);

client.on('guildMemberAdd', member => {
  const message = `Welcome ${member} to the server!`

  const channel = member.guild.channels.cache.find(channel => channel.name === 'hello-world') as TextChannel
  channel.send(message)
})
