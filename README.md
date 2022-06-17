# Indonesia Administrative Area

We provide list of Province (Provinsi), City (Kabupaten/Kota), Administrative Area 3 (Kecamatan) and Administrative Area 4 (Kelurahan) in Indonesia as Static API

# API Format

## Get Provinces List (Provinsi)

> Method: GET
>
> Path: /areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/areas.json

## Get Cities List (Kota)

> Method: GET
>
> Path: /{provinceId}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/areas.json

## Get Administrative Area 3 List (Kecamatan)

> Method: GET
>
> Path: /{provinceId}/{cityId}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/1/areas.json

## Get Administrative Area 4 List (Kelurahan)

> Method: GET
>
> Path: /{provinceId}/{cityId}/{administrativeArea3Id}/areas.json

> Example: https://rukandax.github.io/indonesia-administrative-area/1/1/1/areas.json

# API Response

All of our endpoint will return the similar format

**The Response**

```
{
    "areas": Object[]
}
```

**The Areas**

```
{
    "id": Number,
    "name": String,
    "alias": String (Optional)
}
```

# Code Examples

Here is some example of how to use our Static API

## Javascript

**Fetch**

> TODO: Example Code

**Axios**

> TODO: Example Code

## PHP

**Curl**

> TODO: Example Code