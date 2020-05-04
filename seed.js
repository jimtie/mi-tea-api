const mongoose = require("mongoose");
const db = require("./models");
const fs = require("fs");

const logFile = "./seed.log";
const logMessage = `Seed Instance ${Date.now()}\n\n`;

const log = (message) => {
  fs.appendFileSync(logFile, `${message}\n`);
}

console.log(db);

const teas = [
  {
    name: "Jasmine Green Tea",
    type: "Black Tea",
    price: 15.00,
    description: "Top class LongJing Green Tea blended with Jasmine flower, strong refreshing scent.",
    images: {
      icon: {
        src: "https://www.adagio.com/images5/products_index/jasmine_yin_hao.jpg",
        credit: {
          name: "Claudia Larusso",
          url: "https://unsplash.com/@claudialorux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
      header: {
        src: "https://www.adagio.com/images5/products/jasmine_yin_hao.jpg",
        credit: {
          name: "Jared Erondu",
          url: "https://unsplash.com/@erondu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
    }
  },
  {
    name: "Chamomile",
    type: "Herble Tea",
    Price: 8.00,
    description: "Good for your sleep",
    images: {
      icon: {
        src: "https://www.adagio.com/images5/products_index/chamomile.jpg",
        credit: {
          name: "Claudia Larusso",
          url: "https://unsplash.com/@claudialorux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
      header: {
        src: "https://www.adagio.com/images5/products/chamomile.jpg",
        credit: {
          name: "Jamie Davies",
          url: "https://unsplash.com/@chollz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
    }
  },
  {
    name: "Maple Cream Oolong",
    type: "Oolong Tea",
    Price: 9.00,
    description: "Sweet and Creamy",
    images: {
      icon: {
        src: "https://www.adagio.com/images5/products_index/maple_creme_oolong.jpg",
        credit: {
          name: "Claudia Larusso",
          url: "https://unsplash.com/@claudialorux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
      header: {
        src: "https://www.adagio.com/images5/products/maple_creme_oolong.jpg",
        credit: {
          name: "Jamie Davies",
          url: "https://unsplash.com/@chollz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
    }
  }
];

const users = [
  {
    firstName: "Seanny",
    lastName: "Phoenix",
    email: "seannyphoenix@gmail.com",
    password: "$2b$10$b/19NiIVUPQID99p7YK62ugLD3skR0daNcVu4yGSz/4kw1yCCkQSS",
    plaintext: "testing123",
  },
  {
    firstName: "Sri",
    lastName: "Subramanian",
    email: "srirang97@gmail.com",
    password: "$2b$10$Xt9LeIQgvAaH2A1UH/20m.nCd/rmb/4HC0zJyhhXbpXFSGn030R6y",
    plaintext: "123coder",
  },
  {
    firstName: "Laura",
    lastName: "Sack",
    email: "lauragsack@gmail.com",
    password: "$2b$10$kwzbhqrPugfHMLBuslu39OiKs9CC1gD4pfVFQkcHWhUj9mpnqcsKu",
    plaintext: "dev01",
  },
  {
    firstName: "Jimmy",
    lastName: "Chen",
    email: "jimmychen.xin@gmail.com",
    password: "$2b$10$7m24zqpRGOsSYywIuRJAVujwmENHYnDx4Udv/vc8zUCGIR2zIVsy2",
    plaintext: "jimmy000",
  }
];

async function seed(){
  try{

    fs.appendFileSync(logFile, logMessage);

    // // Delete all teas and images, and seed
    // console.log("Seeding teas and images...");
    // let teaDelete = await db.Tea.deleteMany();
    // log(`Deleted ${teaDelete.n} teas.`);
    // let imageDelete = await db.Image.deleteMany();
    // log(`Deleted ${imageDelete.n} images`);

    // let teaCreate = await db.Tea.create(teas);
    // log(`Created ${teaCreate.length} teas.`);

    // Delete all users, and seed
    console.log("Seeding users...");
    let userDelete = await db.User.deleteMany();
    log(`Deleted ${userDelete.n} users.`);
    let userCreate = await db.User.create(users);
    log(`Created ${userCreate.length} users.`);

  }
  catch(err){
      log(err);
      console.log("Seed failed. See seed.log for details.");
  }
  finally{
    log("\n\n")
    mongoose.disconnect();
  }
}

seed();
