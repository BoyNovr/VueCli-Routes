<template>
<div class="col-md-7 col-lg-8">
    <h4 class="mb-3">Contact</h4>
    <form class="needs-validation" novalidate="">
        <div class="row g-3">
            <div class="col-sm-6">
                <label for="firstname" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstname" placeholder="" value="" required="">
                <div class="invalid-feedback">
                    Valid first name is required.
                </div>
            </div>

            <div class="col-sm-6">
                <label for="lastname" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastname" placeholder="" value="" required="">
                <div class="invalid-feedback">
                    Valid last name is required.
                </div>
            </div>

            <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" required="">
                <div class="invalid-feedback">
                    Your username is required.
                </div>
                </div>
            </div>

            <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="" required="">
                <div class="invalid-feedback">
                    Please enter your shipping address
                </div>
            </div>

            <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="" required="">
                <div class="invalid-feedback">
                    Please enter your shipping address
                </div>
            </div>

            <div class="col-12">
                <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>
            
            <div class="col-md-5">
                <label for="Country" class="form-label">Country</label>
                <select class="form-select" id="Country" required="">
                    <option value="">Choose ....</option>
                    <option>United States</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid country
                </div>
            </div>

            <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                </select>
                <div class="invalid-feedback">
                    Please provide a valid state
                </div>
            </div>

            <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required="">
                <div class="invalid-feedback">
                    Zip Code is required
                </div>
            </div>
        </div>
        <hr class="my-4">
        <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>

    </form>
</div>
</template>

<script>
export default{
    mounted(){
        console.log(this.$route)
    },
    beforeRouteEnter(){
        const isAuth=true;
        if(!isAuth)return '/login';
        return true;
    }
}
</script>