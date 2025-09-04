
const { PrismaClient } = require('../app/generated/prisma/client');
const photographer = require('../data/photographer.json');
const media = require('../data/media.json');

const prisma = new PrismaClient()

async function main() {
	await prisma.photographer.createMany({
		data: photographer
});

await prisma.media.createMany({
		data: media
});
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })