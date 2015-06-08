# Schema Information

## users
| column name     | data type | details               |         
|-----------------|-----------|-----------------------|---------
| id              | integer   | not null, primary key |         
| email           | string    | not null, unique      | indexed 
| fname           | string    | not null              |         
| lname           | string    | not null              |         
| password_digest | string    | not null              |         
| session_token   | string    | not null, unique      | indexed 

## bikes
| column name | data type | details               |                     |         |
|-------------|-----------|-----------------------|---------------------|---------|
| id          | integer   | not null, primary key |                     |         |
| owner_id    | integer   | not null, foreign key | references users    | indexed |
| image_id    | integer   | not null, foreign key | references images   | indexed |
| feature_id  | integer   | not null, foreign key | references features | indexed |
| location    | string    | not null              |                     |         |
| year        | string    | not null              |                     |         |
| make        | string    | not null              |                     |         |
| model       | string    | not null              |                     |         |
| description | text      | not null              |                     |         |
| day_rate    | integer   | not null              |                     |         |
| hour_rate   | integer   | not null              |                     |         |

## images
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| image       | bytea     | not null              |

## bike_rental_request
| column name | data type | details               |         |
|-------------|-----------|-----------------------|---------|
| id          | integer   | not null, primary key |         |
| bike_id     | integer   | not null              | indexed |
| user_id     | integer   | not null              | indexed |
| start_date  | date      | not null              |         |
| start_time  | time      | not null              |         |
| end_date    | date      | not null              |         |
| end_time    | time      | not null              |         |
| status      | string    | not null              |         |

## features
| column name     | data type | details               |
|-----------------|-----------|-----------------------|
| id              | integer   | not null, primary key |
| road_bike       | boolean   | not null              |
| hybrid          | boolean   | not null              |
| mountain_bike   | boolean   | not null              |
| touring_bike    | boolean   | not null              |
| cyclocross      | boolean   | not null              |
| folding_bike    | boolean   | not null              |
| recumbent       | boolean   | not null              |
| tandum          | boolean   | not null              |
| back_rack       | boolean   | not null              |
| front_rack      | boolean   | not null              |
| aerobars        | boolean   | not null              |
| clipless_pedals | boolean   | not null              |
| leather_saddle  | boolean   | not null              |



