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
    price: 8.00,
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
    price: 9.00,
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

const machines = [
  {
    name: "Mi-TEA Home Use v1",
    type: "machine",
    price: 159.99,
    description: "Enjoy your tea for infinity flavors!",
    images: {
      icon: {
        src: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/202012/0069/breville-one-touch-tea-maker-c.jpg",
        credit: {
          name: "Claudia Larusso",
          url: "https://unsplash.com/@claudialorux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      },
      header: {
        src: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/202012/0069/breville-one-touch-tea-maker-c.jpg",
        credit: {
          name: "Jared Erondu",
          url: "https://unsplash.com/@erondu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          site: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        }
      }
    }
  }
]

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

const addresses = [
  {
    address1: "105 Bush St",
    address2: "Suite 208",
    user: "seannyphoenix@gmail.com",
    city: "San Francisco",
    zipcode: "94122",
  },
  {
    address1: "2350 Trent dr",
    address2: "",
    user: "jimmychen.xin@gmail.com",
    city: "San Bruno",
    zipcode: "94066",
  },
  {
    address1: "1551 Southgate Ave",
    address2: "#222",
    user: "jimmychen.xin@gmail.com",
    city: "Daly City",
    zipcode: "94121",
  },
];

const credits = [
  {
    number:"1234567890123456",
    name:"Jimmy Chen",
    expiration:"0522",
    cvv:"123",
    user:"jimmychen.xin@gmail.com",
  },
  {
    number:"5678901234567890",
    name:"Jimmy Chen",
    expiration:"0825",
    cvv:"321",
    user:"jimmychen.xin@gmail.com",
  },
]

const orders = [
  {
    name: "Jasmine Green Tea",
    number: "2",
  }
]

async function seed(){
  try{

    fs.appendFileSync(logFile, logMessage);

    // Delete all teas and images, and seed
    console.log("Seeding teas and images...");
    let teaDelete = await db.Tea.deleteMany();
    log(`Deleted ${teaDelete.n} teas.`);
    let imageDelete = await db.Image.deleteMany();
    log(`Deleted ${imageDelete.n} images`);

    let teaCreate = await db.Tea.create(teas);
    log(`Created ${teaCreate.length} teas.`);

    // Delete all machines, and seed
    console.log("Seeding machines and images...");
    let machineDelete = await db.Machine.deleteMany();
    log(`Deleted ${machineDelete.n} machines.`);

    let machineCreate = await db.Machine.create(machines);
    log(`Created ${machineCreate.length} machines.`);

    // Delete all users, and seed
    console.log("Seeding users...");
    let userDelete = await db.User.deleteMany();
    log(`Deleted ${userDelete.n} users.`);
    let userCreate = await db.User.create(users);
    log(`Created ${userCreate.length} users.`);

    // Delete all addresses and seed
    console.log("Seeding addresses...");
    let addressDelete = await db.Address.deleteMany();
    log(`Deleted ${addressDelete.n} addresses.`)
    let addressCount = 0;
    for (let address of addresses){
      // Get id of the named user
      let user = await db.User.findOne({
        email: address.user
      });
      address.user = user._id;

      let newAddress = await db.Address.create(address);
      addressCount++;
    }
    log(`Created ${addressCount} addresses.`)
    console.log("Seed complete. See seed.log for details.");


    // Delete all credits and seed
    console.log("Seeding credits...");
    let creditDelete = await db.Credit.deleteMany();
    log(`Deleted ${creditDelete.n} credits.`)
    let creditCount = 0;
    for (let credit of credits){
      // Get id of the named user
      let user = await db.User.findOne({
        email: credit.user
      });
      credit.user = user._id;

      let newCredit = await db.Credit.create(credit);
      creditCount++;
    }
    log(`Created ${creditCount} credits.`)
    console.log("Seed complete. See seed.log for details.");

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
