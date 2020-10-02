<?php 

    Class About extends Controller{
        public function index($nama = "Rizky", $pekerjaan = "Game dev", $umur = 20, $judul = "About me"){
            $data['nama'] = $nama;
            $data['pekerjaan'] = $pekerjaan;
            $data['umur'] = $umur;
            $data['judul'] = $judul;
            $this->view('templates/header', $data);
            $this->view('about/index', $data);
            $this->view('templates/footer');
        }
        public function page(){
            $data['judul'] = 'Pages';
            $this->view('templates/header', $data);
            $this->view('about/page');
            $this->view('templates/footer');
        }
    }

?>