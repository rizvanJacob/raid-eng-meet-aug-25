# Workshop Scenario

We will be creating a database schema to model a subset of RAiD's CS Branch processes. These processes are described below. For simplicity, we will not be considering the need to support Authorization for this workshop. 

### 1. Personnel In/Out Processing

Tracks when staff joining/leave RAiD

During in-processing: 
- Record basic staff information
    - Full Name
    - Position
    - Branch
- Issue equipment
- Apply for camp clearance

During out-processing:
- Return equipment
- Revoke camp clearances

### 2. Camp Clearance

Manages requests for individuals to access secure or restricted areas. 

Each request includes:
- Sponsor
- Person requesting clearance (can be staff or visitor)
- Area for access
- Access start date
- Access end date

We will need to whether the request is approved and who approved it.

### 3. Personnel Query Management

Handle internal queries/requests from staff and ensure they are resolved. 

Each query includes:
- Originator
- Query description

For each query, we will:
1. Assign a responder
2. Track the status, which can be one of:
    - Open
    - In Progress
    - Resolved

### 4. Logistics Management

Tracks the movement of physical assets. 

Each asset has:
1. Serial Number
2. Description
3. Model

We need to handle 4 transactions for assets:

1. **Bring-on-charge**: Start managing an item. Each time we bring an item on charge, we need to track:
    - Staff bringing the item on charge
    - Date brought on charge
    - Origin of item (e.g. bought, transferred from another unit, donated)
    - Reference (e.g. invoice number, HOTO form, etc)
2. **Issuance**: Issue an item to staff. We need to track:
    - Staff being issued the item
    - Date of issue
    - Any damage/condition of item (e.g. peripherals)
3. **Return**: Take back an item from staff. We need to track:
    - Staff returning the item
    - Date of return
    - Any damage/condition of item (e.g. peripherals)
4. **Disposal**: Stop managing an item. Each time we dispose an item, we need to track:
    - Staff responsible for disposal
    - Date disposed
    - Reason for disposal
    - Reference (e.g. invoice for destruction)