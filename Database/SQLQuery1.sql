create database helperland

create table UserType (
	UserTypeID int not null primary key,
	UserType varchar(30) not null,
	UserRole varchar(30)
)

create table Gender(
	GenderID int not null primary key,
	Gender varchar(15)
)

create table Users (
	UserID int not null primary key,
	FirstName varchar(50) not null,
	LastName varchar(50),
	EmailID varchar(100) check(EmailID like '%_@__%.__%') not null,
	Password varchar(50) not null,
	PhoneNumber varchar(20) not null,
	UserTypeID int not null foreign key references UserType(UserTypeID),
	UserStatus varchar(20),
	Date_Of_Birth date,  
	GenderID int foreign key references Gender(GenderID),
	AddressID int
)



create table Address(
	AddressID int not null primary key,
	UserID int not null foreign key references Users(UserID),
	PostalCode varchar(8) not null,
	City varchar(20),
	HouseName varchar(50),
	StreetName varchar(50),
	Contact_Number varchar(50)
)


UPDATE Address
SET Address.Contact_Number = Users.PhoneNumber
FROM Address
JOIN Users
ON Address.UserID = Users.UserID;


ALTER TABLE Users
ADD FOREIGN KEY (AddressID) REFERENCES Address(AddressID);



create table Service(
	ServiceID int not null primary key,
	CustomerID int not null foreign key references Users(UserID),
	ProviderID int not null foreign key references Users(UserID),
	StartTime datetime not null,
	EndTime datetime not null,
	AddressID int foreign key references Address(AddressID),
	HousePet bit default(0) not null,
	Service_Status varchar(20) not null,
	RatingID int
);


create table Rating(
	RatingID int not null primary key,
	ServiceID int not null foreign key references Service(ServiceID),
	CustomerID int not null foreign key references Users(UserID),
	ProviderID int not null foreign key references Users(UserID),
	ServiceRating decimal(2,1) check( ServiceRating >= 0 and ServiceRating <= 5),
	Review varchar(255)
);


ALTER TABLE Service
ADD FOREIGN KEY (RatingID) REFERENCES Rating(RatingID);

ALTER TABLE Service 
add Service_Duration as datediff(hour, EndTime, StartTime);



create table Fav_Block_Provider(
	Fav_BlockID int not null primary key,
	CustomerID int not null foreign key references Users(UserID),
	ProviderID int not null foreign key references Users(UserID),
	Favourite bit default(0),
	Blocked bit default(0)
)
