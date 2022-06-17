# Indonesia Administrative Area

List of Province (Provinsi), City (Kabupaten/Kota), Administrative Area 3 (Kecamatan) and Administrative Area 4 (Gampong/Desa/Kelurahan) in Indonesia

# API Format

## Get Provinces List (Provinsi)

> Method: GET
>
> Path: /areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/areas.json

## Get Cities List (Kabupaten/Kota)

> Method: GET
>
> Path: /{provinceId}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/areas.json

## Get Administrative Area 3 List (Kecamatan)

> Method: GET
>
> Path: /{provinceId}/{cityId}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/1/areas.json

## Get Administrative Area 4 List (Gampong/Desa/Kelurahan)

> Method: GET
>
> Path: /{provinceId}/{cityId}/{administrativeArea3Id}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/1/1/areas.json

# Responses

All of our data basically return the similar format

**The Response**

```
{
    "areas": Object[]
}
```

**The Area Object**

```
{
    "id": Number,
    "name": String,
    "alias": String (Optional)
}
```

# Code Examples

Here is some example of how to use our data in your code

## Javascript

**Fetch**

> TODO: Example Code

**Axios**

> TODO: Example Code

## PHP

**Curl**

> TODO: Example Code