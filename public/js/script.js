$(function() {

    


    $('.tombolTambahData').on('click', function(){
        $('#tombolTambahData').html('Tambah data mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah data');
    });

    $('.tampilModalUbah').on('click', function(){

        $('#FormModalLabel').html('Ubah data mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah data');
        $('.modal-body form').attr('action', 'http://localhost/github/rekweb2020_183040008_phpmvc/public/mahasiswa/ubah')

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/github/rekweb2020_183040008_phpmvc/public/mahasiswa/getUbah',
            data: {id: id},
            method: 'post',
            dataType: 'json',
            success: function(data){
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});