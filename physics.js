const getAcceleration =(obj) => {

    if ( obj.f != null && obj.m != null ) {

        return obj.f/obj.m

    } else if ( obj.Δv != null && obj.Δt != null ) {

        return obj.Δv/obj.Δt

    } else if (obj.d != null && obj.t != null) {

        return (2*obj.d)/(obj.t*obj.t)

    } else {
        return 'impossible'
    }
}