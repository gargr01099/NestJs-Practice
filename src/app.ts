import "reflect-metadata";
import express from "express";
const app = express();
import { DataSource } from "typeorm";
import { Company } from "./entities/Company";
import { Product } from "./entities/Products";
app.use(express.json());
const port = 3000;

app.get("/", async function (req, res) {
  // const userRepo = AppDataSource.getRepository(User);
  //    await userRepo.delete(2)
  //   //find all the records
  // const allRecords = await userRepo.find(); //find proivded by typeorm
  //   res.json(allRecords);
  // const profileRepo = AppDataSource.getRepository(Profile);
  // await profileRepo.delete(2);
  // res.send("prfile deleted");
  // let profile: Profile = new Profile();
  // profile.name = "rahul";
  // profile.description = "hello";
  // profile.filename = "rahul.jpg";
  // profile.views = 100;
  // profile.isPublished = true;
  //   const profileInserted = await AppDataSource.getRepository(Profile).save(
  //     profile
  //   );
  // const userFound = await userRepo.findOne({
  //   where: { id: 4 },
  // });
  // if (userFound) {
  //   userFound.email = "email@gmail.com";
  //   userFound.firstName = "rahul";
  //   userFound.lastName = "garg";
  //   userFound.profile.filename = "garg.jpg";
  //   const updatedRecord = await userRepo.save(userFound);
  //   res.json(updatedRecord);
  // } else {
  //   res.send("record does not exist");
  // }
  // let user: User = new User();
  // user.email = "rahul@gmail.com";
  // user.firstName = "rahul";
  // user.lastName = "garg";
  // user.profile = profile;
  // const userInserted = await userRepo.save(user);
  // res.json(userInserted);
});
app.get("/getproduct", async function (req, res) {
  const companyRepo = AppDataSource.getRepository(Company);
  //insert
  let products: Product[] = [];
  let iphone = new Product();
  iphone.name = "iphone";
  iphone.price = 2500000;
  iphone.description = "iphone is the best phone in the world";

  let ipad = new Product();
  ipad.name = "ipad";
  ipad.price = 3500000;
  ipad.description = "ipad is the best pad in the world";

  products.push(iphone, ipad);

  let company: Company = new Company();
  company.name = "Apple";
  company.description =
    "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Tech technology companies, alongside Amazon, Google, Microsoft, and Facebook.";
  company.products = products; // now products will be added in company table

  const dataInserted = await companyRepo.save(company);
  res.json(dataInserted);
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "typeorm_db",
  entities: ["src/entities/*[.ts,.js]"],
  synchronize: true, // to keep sync with database all the entities table.
  logging: true,
});
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.log("Error Connecting to Database", error);
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
